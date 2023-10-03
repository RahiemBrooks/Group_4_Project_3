from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()



class Data(db.Model):
    __tablename__ = 'data'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    AREA = db.Column(db.Integer)
    AREA_TITLE = db.Column(db.Text)
    AREA_TYPE = db.Column(db.Integer)
    PRIM_STATE = db.Column(db.Text)
    NAICS = db.Column(db.Text)
    NAICS_TITLE = db.Column(db.Text)
    I_GROUP = db.Column(db.Text)
    OWN_CODE = db.Column(db.Integer)
    OCC_CODE = db.Column(db.Text)
    OCC_TITLE = db.Column(db.Text)
    O_GROUP = db.Column(db.Text)
    TOT_EMP = db.Column(db.Integer)
    EMP_PRSE = db.Column(db.Float)
    JOBS_1000 = db.Column(db.Float)
    LOC_QUOTIENT = db.Column(db.Float)
    PCT_TOTAL = db.Column(db.Float)
    PCT_RPT = db.Column(db.Float)
    H_MEAN = db.Column(db.Float)
    A_MEAN = db.Column(db.Integer)
    MEAN_PRSE = db.Column(db.Float)
    H_PCT10 = db.Column(db.Float)
    H_PCT25 = db.Column(db.Float)
    H_MEDIAN = db.Column(db.Float)
    H_PCT75 = db.Column(db.Float)
    H_PCT90 = db.Column(db.Float)
    A_PCT10 = db.Column(db.Integer)
    A_PCT25 = db.Column(db.Integer)
    A_MEDIAN = db.Column(db.Integer)
    A_PCT75 = db.Column(db.Integer)
    A_PCT90 = db.Column(db.Integer)
    ANNUAL = db.Column(db.Float)
    HOURLY = db.Column(db.Float)
