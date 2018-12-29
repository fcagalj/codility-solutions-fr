# Codility solutions 2016 JavaScript

Project for practice coding. Contains solutions for codility lessons (2018) written in JS. Project have also prepared
node inspector environment to test algorithm in browser, and gulp task to generate exercise and test files.


## Naming

### For codility

lib/codility/LessionNo_Chapter_TestName.js

test/codility/LessionNo_Chapter_TestName_Spec.js

### For other exercises

lib/ExerciseFolder/ExerciseName.js

test/ExerciseFolder/ExerciseName_Spec.js

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

gulp generate --name ExerciseName --folder ExerciseFolder

```
