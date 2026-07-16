---
title: "Building StatWise — An Automated Statistical Reporting Platform"
slug: building-statwise
excerpt: "How I built a SaaS platform that turns raw CSV/Excel data into comprehensive statistical reports with just a few clicks."
category: "Project Walkthroughs"
date: "2026-06-10"
readingTime: "8 min read"
cover: ""
---

## The Idea

Most small businesses in Bangladesh don't have access to data analysts. They collect sales data, customer information, and inventory records — but it all sits in spreadsheets. No insights, no trends, no forecasts.

I wanted to build something that changes that. Upload a file, get a complete statistical report.

## Tech Stack

- **Backend:** FastAPI (Python)
- **Frontend:** Tailwind CSS
- **Processing:** Pandas, Scikit-learn
- **Database:** PostgreSQL
- **Reporting:** WeasyPrint (PDF generation)

## Architecture

The system has three main components:

```python
# Simplified pipeline
def generate_report(file_path: str) -> Report:
    df = load_data(file_path)
    stats = descriptive_statistics(df)
    trends = trend_analysis(df)
    forecast = generate_forecast(df)
    return compile_report(stats, trends, forecast)
```

### 1. Data Ingestion

Supports CSV and Excel files. The parser automatically detects column types — numerical, categorical, datetime — and handles missing values.

### 2. Analysis Engine

Runs a battery of statistical tests:

- Descriptive statistics (mean, median, std, quartiles)
- Trend analysis with moving averages
- Forecasting using linear regression
- Correlation analysis between numerical columns

### 3. Report Generation

Compiles everything into a downloadable PDF with proper formatting, tables, and charts.

## Challenges

**Challenge 1: Type Detection**

Not all CSV files are clean. Some have mixed types in columns, inconsistent date formats, or encoding issues. I built a robust type detector that samples rows and falls back gracefully.

**Challenge 2: Memory Management**

Large Excel files (100k+ rows) can crash the server. I implemented streaming reads with chunking.

```python
def safe_load(file, chunk_size=10000):
    chunks = []
    for chunk in pd.read_csv(file, chunksize=chunk_size):
        chunks.append(chunk)
    return pd.concat(chunks)
```

**Challenge 3: PDF Layout**

Generating well-formatted PDFs programmatically is harder than it looks. I spent a week just on table layouts and page breaks.

## What I Learned

1. **Start simple.** The first version just did descriptive stats. I added forecasting later based on user requests.
2. **Error handling matters.** A file upload platform must handle every edge case — empty files, wrong formats, encoding issues.
3. **Feedback loops.** Early users told me they wanted charts, so I added Plotly integration before the PDF export.

## Results

StatWise is live and processing reports for a handful of small businesses. The average report generates in under 30 seconds for datasets under 50k rows.

---

*Want to try it? Check out the live demo or view the source code on GitHub.*
