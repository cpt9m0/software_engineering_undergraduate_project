FROM python:3.7-alpine

ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /requirements.txt
RUN apk add --update postgresql-client build-base jpeg-dev zlib-dev
RUN apk add --update gcc libc-dev linux-headers postgresql-dev
RUN pip install -r /requirements.txt

RUN mkdir /app
WORKDIR /app
COPY ./app /app

RUN adduser -D user
USER user