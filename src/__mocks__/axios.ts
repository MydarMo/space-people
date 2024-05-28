const mockResponse = {
    data: {
        "Meta Data": {
          "1. Information": "Intraday (5min) open, high, low, close prices and volume",
          "2. Symbol": "IBM",
          "3. Last Refreshed": "2024-05-24 19:55:00",
          "4. Interval": "5min",
          "5. Output Size": "Compact",
          "6. Time Zone": "US/Eastern"
        },
        "Time Series (5min)": {
          "2024-05-24 19:55:00": {
            "1. open": "171.0500",
            "2. high": "171.0500",
            "3. low": "171.0500",
            "4. close": "171.0500",
            "5. volume": "32"
          }
        }
      }
}


export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}