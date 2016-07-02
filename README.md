# Codility solutions 2016 JavaScript

Project for practice coding. Contains solutions for codility lessons (2016) written in JS. Project have also prepared
node inspector environment to test algorithm in browser, and gulp task to generate exercise and test files.


## Naming

### For codility

lib/LessionNo_Chapter_TestName.js

test/LessionNo_Chapter_TestName_Spec.js

### For other exercises

lib/ExerciseName.js

test/ExerciseName_Spec.js

## Test locally

```
mocha --grep ExerciseName

```

## Node inspector

```

node-debug _mocha --grep ExerciseName

```

## Generate test and exercise file automaticly

```

gulp generate --name ExerciseName

```