import requests

headers = {
    'authority': 'appsapi.monster.io',
    'accept': 'application/json',
    'accept-language': 'en-US,en;q=0.9,co;q=0.8',
    'content-type': 'application/json; charset=UTF-8',
    'origin': 'https://www.monster.com',
    'referer': 'https://www.monster.com/jobs/search?q=python&where=&page=16&so=m.s.sh',
    'request-starttime': '1696561583999',
    'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'cross-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
}

params = {
    'apikey': 'AE50QWejwK4J73X1y1uNqpWRr2PmKB3S',
}

json_data = {
    'jobQuery': {
        'query': 'python',
        'locations': [
            {
                'country': 'us',
                'address': '',
                'radius': {
                    'unit': 'mi',
                    'value': 20,
                },
            },
        ],
    },
    'jobAdsRequest': {
        'position': [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
        ],
        'placement': {
            'channel': 'WEB',
            'location': 'JobSearchPage',
            'property': 'monster.com',
            'type': 'JOB_SEARCH',
            'view': 'SPLIT',
        },
    },
    'fingerprintId': 'z404e1ebeab4ff61d204e2a8d3cae95ee',
    'offset': 10,
    'pageSize': 9,
    'histogramQueries': [
        'count(company_display_name)',
        'count(employment_type)',
    ],
    'searchId': 'ec4cfc93-75f7-46a5-8b98-197f33aeecb5',
}

response = requests.post(
    'https://appsapi.monster.io/jobs-svx-service/v2/monster/search-jobs/samsearch/en-US',
    params=params,
    headers=headers,
    json=json_data,
)

# Note: json_data will not be serialized by requests
# exactly as it was in the original request.
#data = '{"jobQuery":{"query":"python","locations":[{"country":"us","address":"","radius":{"unit":"mi","value":20}}]},"jobAdsRequest":{"position":[1,2,3,4,5,6,7,8,9],"placement":{"channel":"WEB","location":"JobSearchPage","property":"monster.com","type":"JOB_SEARCH","view":"SPLIT"}},"fingerprintId":"z404e1ebeab4ff61d204e2a8d3cae95ee","offset":144,"pageSize":9,"histogramQueries":["count(company_display_name)","count(employment_type)"],"searchId":"ec4cfc93-75f7-46a5-8b98-197f33aeecb5"}'
#response = requests.post(
#    'https://appsapi.monster.io/jobs-svx-service/v2/monster/search-jobs/samsearch/en-US',
#    params=params,
#    headers=headers,
#    data=data,
#)

print(response.json()['estimatedTotalSize'])
# Note: json_data will not be serialized by requests
# exactly as it was in the original request.
#data = '{"jobQuery":{"query":"data","locations":[{"country":"us","address":"","radius":{"unit":"mi","value":20}}]},"jobAdsRequest":{"position":[1,2,3,4,5,6,7,8,9],"placement":{"channel":"WEB","location":"JobSearchPage","property":"monster.com","type":"JOB_SEARCH","view":"SPLIT"}},"fingerprintId":"z404e1ebeab4ff61d204e2a8d3cae95ee","offset":405,"pageSize":9,"histogramQueries":["count(company_display_name)","count(employment_type)"],"includeJobs":[]}'
#response = requests.post(
#    'https://appsapi.monster.io/jobs-svx-service/v2/monster/search-jobs/samsearch/en-US',
#    params=params,
#    headers=headers,
#    data=data,
#)