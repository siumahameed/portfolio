---
title: "From Notebook to Production — Lessons from Shipping ML Projects"
slug: from-notebook-to-production
excerpt: "A Jupyter notebook is not a production system. Here's what I learned deploying real ML applications."
category: "Tutorials"
date: "2026-05-15"
readingTime: "7 min read"
cover: ""
---

Every ML course teaches you to build models in Jupyter notebooks. None of them teach you how to turn that notebook into something other people can actually use.

After shipping several ML projects, here's what I've learned.

## The Gap

A notebook has:
- Hardcoded paths
- Global variables
- No error handling
- One-shot execution

A production system needs:
- Reproducible pipelines
- Logging and monitoring
- Graceful failure modes
- API contracts

## Step 1: Modularize Your Code

```python
# Bad — notebook style
data = pd.read_csv("data.csv")
data = data.dropna()
X = data.drop("target", axis=1)
y = data["target"]
model.fit(X, y)

# Good — modular
from src.data import load_and_clean
from src.features import build_features
from src.models import train_model

data = load_and_clean("data.csv")
X, y = build_features(data)
model = train_model(X, y)
```

## Step 2: Add an API Layer

FastAPI is my go-to for serving models. It's fast, has automatic docs, and handles validation out of the box.

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class PredictionRequest(BaseModel):
    features: list[float]

@app.post("/predict")
def predict(req: PredictionRequest):
    result = model.predict([req.features])
    return {"prediction": result.tolist()}
```

## Step 3: Handle Errors Gracefully

Not every prediction will succeed. Bad inputs, missing values, unexpected types — all of these will happen in production.

```python
@app.post("/predict")
def predict(req: PredictionRequest):
    try:
        validated = preprocessor.transform(req.features)
        result = model.predict(validated)
        return {"prediction": result.tolist(), "confidence": confidence}
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        logger.error(f"Prediction failed: {e}")
        raise HTTPException(status_code=500, detail="Internal error")
```

## Step 4: Version Everything

Models change. Data changes. Code changes. If you don't version all three, you will deploy the wrong model at some point.

- Use `dvc` or simple git tags for data
- Save model artifacts with timestamps
- Tag API versions

## Step 5: Monitor in Production

A model that worked perfectly on your test set can fail silently in production. Monitor:

- Prediction distribution shifts
- Latency spikes
- Error rates
- Input data drift

## Final Thought

The hardest part of ML engineering isn't building the model. It's building everything around it that makes the model useful, reliable, and maintainable.
