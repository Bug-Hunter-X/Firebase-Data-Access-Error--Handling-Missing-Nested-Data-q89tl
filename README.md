# Firebase Data Access Error: Handling Missing Nested Data

This repository demonstrates a common but often overlooked error in Firebase when accessing nested data.  Directly accessing nested fields without verifying the existence of intermediate nodes can result in runtime errors if the data structure is incomplete.

## Problem
The provided `bug.js` file attempts to access deeply nested data within a Firestore document.  If any of the parent fields are missing, a `TypeError` will be thrown due to attempting to access properties of `undefined`.

## Solution
The `bugSolution.js` file demonstrates the correct way to handle this situation by using optional chaining (`?.`) and nullish coalescing (`??`) operators to gracefully handle missing data.

This ensures that the code doesn't crash and prevents unexpected behavior.  The README file explains how to handle the potential error by using optional chaining and nullish coalescing.