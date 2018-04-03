---
title: "Consilia"
excerpt: "A smart academic planner for HKU."
header:
  teaser: course_planner.png
sidebar:
  - title: "Consilia"
    image: course_planner.png
    image_alt: "Course Planner"
    text: A smart academic planner for HKU.
gallery:
  - url: course_planner.png
    image_path: course_planner.png
    alt: "Course planner"
---

A smart academic planner developed to solve academic planning problems at HKU.

{% include gallery caption="These are screenshots of the academic planner." %}

## Links

* [Github](https://github.com/utkarsh867/Consilia)
* [Demo](http://dbil.southeastasia.cloudapp.azure.com:3000)

## Proposal

We are working with HKU Common Core and Academic Advising department to get official support for this so we can use real-time and structured data instead of manual scraping.

You can read the proposal [here](https://docs.google.com/document/d/1wDlMYRghCE826MMMo283TukCORy_jY0d9yf6ey5SyX8/edit?usp=sharing).

## Student Survey

To convince the stakeholders and understand the problem better we carried out a survey. You can find the data [here](assets/survey_data.pdf).

## Data Schema

### Curriculum

`[ { "faculty": "Faculty of Engineering", "Major": { "Computer Science": [ [ "CAES1000" ], [ "CAES9542" ] ] } }, { "faculty": "Faculty of Social Sciences", "Minor": { "Neuroscience": [ [ "PSYC1001" ], [ "PSYC2110", \\This means one out of the four courses fulfils the requirement "PSYC2111", "PSYC2112", "PSYC4101" ], [ "PSYC2110", "PSYC2111", "PSYC2112", "PSYC4101", "BBMS3011", "BIOL3105", "BBMS2003", "MEDE3501", "PSYC2007", "PSYC2051" ] ] } } ]`

### Course

`[ { "code": "CAES1000", "name": "CAES1000 Core University English", "to_clean": "Only for Year 1 students in the new cohort to enroll", "rec_year": 1, "semester": 4, "criteria": [ { "passed": [], "enrolled": [] } ], "exclusive": [], "ineligible": [ { "passed": [], "enrolled": [] } ], "faculty": "", "year": [ 1 ] } ]`