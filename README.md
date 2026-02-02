# Playwright Testing Project

A project to test APIs using **Playwright** with **TypeScript**, including database tests with PostgreSQL.

---

## Prerequisites

- **Node.js** >= 18
- **PostgreSQL** >= 18.1-2

Before running the database tests, prepare your PostgreSQL database:

1. Create a new database:

```sql
CREATE DATABASE mydatabase;

CREATE USER postgres WITH PASSWORD 'mypassword';

CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL
);

## Clone the Repository
git clone https://github.com/alizohaib2112-png/playwright.git
cd playwright

## Install Dependencies
npm install

## Run All tests
npx playwright test
