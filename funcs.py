from collections import Counter

import pandas as pd
import us


def identify_majority_dtype(series):
    int_count = 0
    float_count = 0
    str_count = 0

    for item in series:
        if isinstance(item, int):
            int_count += 1
        elif isinstance(item, float):
            float_count += 1
        elif isinstance(item, str):
            str_count += 1

    if int_count >= float_count and int_count >= str_count:
        return 'int'
    elif float_count >= int_count and float_count >= str_count:
        return 'float'
    else:
        return 'str'


def clean_data():
    df = pd.read_excel('data/data.xlsx')
    df.dropna()
    for col in df.columns:
        dtype = identify_majority_dtype(df[col])
        if dtype == 'int' or dtype == 'float':
            df[col] = pd.to_numeric(df[col], errors='coerce').fillna(0).astype(float if dtype == 'float' else int)

    df = df.drop_duplicates()

    df.to_csv('cleaned_data.csv')
    return df


import random


def generate_unique_colors(n):
    colors = set()

    while len(colors) < n:
        color = "#{:06x}".format(random.randint(0, 0xFFFFFF))
        colors.add(color)

    return list(colors)


# Generate an array of 50 unique random colors
data = [
    56850, 30580, 25900, 14980, 12350, 11810, 10710, 10170, 9920, 7870,
    7810, 7380, 7090, 6960, 6120, 5830, 5460, 5230, 4040, 3890, 3400, 3360,
    3140, 3120, 2930, 2510, 2210, 1900, 1800, 1660, 1480, 1230, 1120, 980,
    590, 490, 480, 440, 430, 310, 290, 260, 260, 210, 190, 180, 120, 90, 70, 40, 0
]

# Find minimum and maximum values
min_val = min(data)
max_val = max(data)

# Define the number of ranges (bins)
num_ranges = 8

# Calculate the interval
interval = (max_val - min_val) / num_ranges

# Initialize Counter to store counts for each range
ranges_counter = Counter()

# Assign data points to their respective range
for num in data:
    bin_index = int((num - min_val) // interval)
    bin_index = min(bin_index, num_ranges - 1)  # Ensure that the maximum value falls into the last bin
    range_start = min_val + bin_index * interval
    range_end = range_start + interval
    ranges_counter[f"{range_start}-{range_end}"] += 1

# Output the counts for each range
for range_interval, count in ranges_counter.items():
    print(f"Range {range_interval}: {count} items")



