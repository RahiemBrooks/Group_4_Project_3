from collections import defaultdict

from flask import Flask, jsonify
from flask_cors import CORS
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import inspect
from funcs import clean_data
from models import db, Data
import us

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'  # Use SQLite for simplicity
migrate = Migrate(app, db)
db.init_app(app)

# with app.app_context():
with app.app_context():
    record_count = db.session.query(Data).count()

    if record_count < 1:
        print("Ali")
        print(record_count)
        df = clean_data()
        df.to_sql('data', db.engine, if_exists='append', index=False)  # Use 'replace' if you want to overwrite existing data


@app.route('/')
def hello_world():  # put application's code here
    return 'HomePage'


@app.route('/api/data_scientist_jobs_per_state', methods=['GET'])
def state_choropleth():
    ds_data = Data.query.filter_by(OCC_TITLE="Data Scientists").filter(Data.PRIM_STATE != "US").all()

    # Group the data by state and sum the job counts (tot_emp)
    state_job_counts = {}
    for data in ds_data:
        if data.PRIM_STATE not in state_job_counts:
            state_job_counts[data.PRIM_STATE] = 0
        state_job_counts[data.PRIM_STATE] += data.TOT_EMP
    # Prepare the data for JSON response

    response_data = [
        {"name": str(us.states.lookup(state)), "employment_rate": count}
        for i, (state, count) in enumerate(state_job_counts.items())
    ]

    return jsonify(response_data)


@app.route('/api/data_scientist_jobs_by_industry', methods=['GET'])
def industries_map():
    ds_data = Data.query.filter_by(OCC_TITLE="Data Scientists").filter(Data.TOT_EMP > 4000).filter(~Data.NAICS_TITLE.like("%Cross-industry%")).all()

    # Group the data by state and sum the job counts (tot_emp)
    industry_job_counts = {}
    for data in ds_data:
        if data.NAICS_TITLE not in industry_job_counts:
            industry_job_counts[data.NAICS_TITLE] = 0
        industry_job_counts[data.NAICS_TITLE] += data.TOT_EMP

    sorted_industry_job_counts = {k: v for k, v in sorted(industry_job_counts.items(), key=lambda item: item[1], reverse=True)}

    response_data = [
                        {"id": i, "industry": industry, "employment_rate": count}
                        for i, (industry, count) in enumerate(sorted_industry_job_counts.items())
                    ][:21]

    return jsonify(response_data)


@app.route('/api/salary_forecast', methods=['GET'])
def salary():
    ds_data = Data.query.filter(Data.OCC_TITLE == "Data Scientists").all()
    state_salary_data = defaultdict(list)
    for data in ds_data:
        state = data.PRIM_STATE
        annual_mean = data.A_MEAN
        percentile_25th = data.A_PCT25
        percentile_75th = data.A_PCT75

        state_salary_data[state].append({
            'annual_mean': annual_mean,
            'percentile_25th': percentile_25th,
            'percentile_75th': percentile_75th
        })
        # Calculate statistics like mean and percentiles for each state.
    response_data = []
    for state, salary_data in state_salary_data.items():
        total_mean_salary = sum(item['annual_mean'] for item in salary_data) / len(salary_data)
        total_25th_percentile = sum(item['percentile_25th'] for item in salary_data) / len(salary_data)
        total_75th_percentile = sum(item['percentile_75th'] for item in salary_data) / len(salary_data)

        response_data.append({
            'state': state,
            'mean_salary': total_mean_salary,
            '25th_percentile_salary': total_25th_percentile,
            '75th_percentile_salary': total_75th_percentile
        })

    return jsonify(sorted(response_data, key=lambda x: x['mean_salary'], reverse=True))


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
