FROM python:3.12-slim

WORKDIR /app

COPY app.py .
COPY data.txt .

RUN pip install flask

EXPOSE 5000

CMD ["python3", "app.py"]