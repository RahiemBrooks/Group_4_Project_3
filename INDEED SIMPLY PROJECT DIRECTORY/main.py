# Import necessary libraries
import re
import time

import pandas as pd
import numpy as np
from bs4 import BeautifulSoup as bs
import requests
import matplotlib.pyplot as plt
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

search_terms = [
    "",
    "Python",
    "SQL",
    "R",
    "Spark",
    "Hadoop",
    "Java",
    "Tableau",
    "AWS",
    "SAS",
    "Hive",
    "Scala",
    "Excel",
    "TensorFlow",
    "C++",
    "Azure",
    "NoSQL",
    "Linux",
    "C",
    "Matlab",
    "Scikit-learn",
    "Pandas",
    "Git",
    "Keras",
    "Javascript",
    "Pig",
    "Hbase",
    "Google Cloud",
    "Docker",
    "NumPy",
    "PyTorch",
    "C#",
    "SPSS",
    "MySQL",
    "Perl",
    "Cassandra",
    "MongoDB",
    "GCP",
    "Kubernetes",
    "D3",
    "Databricks",
    "postgresql",
    "Caffe",
    "Airflow",
    "Alteryx",
    "BigQuery",
    "Fastai",
]


def get_indeed_jobs():
    # read search terms from csv into a list
    df = pd.DataFrame({
        'Name': search_terms,
        'Indeed': [0 for i in range(len(search_terms))],
        # 'Monster': [0 for i in range(len(search_terms))],
        # 'Simply': [0 for i in range(len(search_terms))],

    })

    indeed_list = []

    driver = webdriver.Chrome()

    for term in search_terms:
        try:
            url = f'https://www.indeed.com/jobs?q=%22data+scientist%22+%22{term}%22&l=United+States'
            driver.get(url)
            jobs_element = driver.find_element(By.XPATH, '//*[@id="jobsearch-JapanPage"]/div/div/div[5]/div[1]/div[4]/div/div/div[2]/span[1]')
            jobs = jobs_element.text
            job_numbers = jobs.split(' ')[0].replace(',', '')
            df.loc[df['Name'] == term, 'Indeed'] = job_numbers
            print(df)
            df.loc[df['Name'] == '', 'Name'] = "Data Scientist"

        except:
            print(f'error: {term}')
        break
    driver.quit()
    return df


def get_monster_jobs():
    df = pd.DataFrame({
        'Name': search_terms,
        # 'Indeed': [0 for i in range(len(search_terms))],
        'Monster': [0 for i in range(len(search_terms))],
        # 'Simply': [0 for i in range(len(search_terms))],

    })
    monster_list = []
    driver = webdriver.Chrome()

    for term in search_terms:
        url = f'https://www.monster.com/jobs/search/?q={term}&where=US'
        driver.get(url)
        time.sleep(2)

        # Find the div element you want to scroll

        # Scroll vertically by 200 pixels
        for i in range(1000):
            driver.execute_script("window.scrollBy(0, 800);")
            print("Done")
            time.sleep(0.5)
            driver.execute_script("window.scrollBy(0, 800);")
            print("Done")
            break
        time.sleep(10)

        time.sleep(10)
        articles = driver.find_elements(By.TAG_NAME, 'article')
        count = len(articles)
        print(count)
        df.loc[df['Name'] == term, 'Monster'] = count
        print(df)
        df.loc[df['Name'] == '', 'Name'] = "Data Scientist"
        break
    driver.quit()
    return df


def get_simply_hired():
    df = pd.DataFrame({
        'Name': search_terms,
        # 'Indeed': [0 for i in range(len(search_terms))],
        # 'Monster': [0 for i in range(len(search_terms))],
        'Simply': [0 for i in range(len(search_terms))],

    })
    simply_list = []
    driver = webdriver.Chrome()

    for term in search_terms:
        url = f'https://www.simplyhired.com/search?q=%22data+scientist%22+%22{term}%22&l=United+States'

        try:
            driver.get(url)
            count = driver.find_element(By.XPATH, '//*[@id="__next"]/div/main/div/div[1]/div[4]/p').text
            df.loc[df['Name'] == term, 'Simply'] = count
            print(df)
            df.loc[df['Name'] == '', 'Name'] = "Data Scientist"

        except Exception as e:
            print(f'error: {e}')
        break
    return df


df_indeed = get_indeed_jobs()
df_monster = get_monster_jobs()
df_simply = get_simply_hired()

# df = df_indeed.merge(df_simply, on='Name', how='outer')
df = df_indeed.merge(df_simply, on='Name', how='outer').merge(df_monster, on='Name', how='outer')
df.set_index('Name', inplace=True)

for col in df.columns:
    df[col] = df[col].astype(float)

print(df.info())
