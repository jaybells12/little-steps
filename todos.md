# DATABASE MODELING

## Important

All database actions need to be restricted to specific school based on a criteria (hash code)

## Remove vestigial models []

## Revamp Lessons Model [X]

    Lessons data needs to be individualized, ie each guide can have their own specific lesson plan.
    How to implement this while minimizing repeated data?

## Revamp School Model [X]

    School will need to house
      1. Users
        - Directors
        - Guides
        - Students
        - Parents
      2. Lesson Plans

# ROUTING

## How to protect routes based on roles?

# USER LOGIN

## How to establish school identity securely? [X]

    1. User logs in with unique email
    2. User stored in Database has a school hashcode
    3. Retrieve stored school hashcode from user document
    4. Store hashcode in the session cookie
    Solved with using JWT containing role & school code

# ROLE PERMISSIONS

## Where to implement role based authentification?

1. at the schema level with middleware?
2. using next js route middleware?
3. client level?

## How to handle user deleting its own account?

## Director

1. Can CRUD new directors, teachers, students, parents

## Guide

1. Can CRUD lessons
2. Has access to one(?) lesson plan (array of lessons)

## Parent

1. Readonly access to their students info
2. Parent Student must be linked in some way
