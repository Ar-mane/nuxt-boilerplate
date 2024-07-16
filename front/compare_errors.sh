#!/bin/bash

# Read previously existing errors
errors=$(<vue_tsc_errors.txt)
echo "Previously existing errors: $errors"

# Function to replace TypeScript comments in .vue and .ts files
replace_ts_comments() {
  if [[ "$OSTYPE" == "darwin"* ]]; then
    # For Mac OS
    find . \( -name "*.vue" -o -name "*.ts" \) ! -path "./node_modules/*" -exec sed -i '' "s/$1/$2/g" {} +
  else
    # For other operating systems
    find . \( -name "*.vue" -o -name "*.ts" \) ! -path "./node_modules/*" -exec sed -i "s/$1/$2/g" {} +
  fi
}

# Enable TypeScript semantic checks in commented .vue files
replace_ts_comments "ts-nocheck" "script-replaced-ts-nocheck"
replace_ts_comments "ts-expect-error" "script-replaced-ts-expect-error"
replace_ts_comments "vue-expect-error" "script-replaced-vue-expect-error"

# Get the current number of errors
newErrors=$(yarn vue-tsc --pretty false 2>&1 | grep -c "error" | xargs)
echo "Errors now: $newErrors"

# Disable TypeScript semantic checks in commented .vue files
replace_ts_comments "script-replaced-ts-nocheck" "ts-nocheck"
replace_ts_comments "script-replaced-ts-expect-error" "ts-expect-error"
replace_ts_comments "script-replaced-vue-expect-error" "vue-expect-error"

# Update the vue_tsc_errors.txt file if there are new errors
if [ "$newErrors" -gt "$errors" ]; then
  echo "❌ New errors found!"
  exit 1
else
  echo "✅ No new errors found"
  echo "$newErrors" > vue_tsc_errors.txt
  echo "Updated vue_tsc_errors.txt file"
  exit 0
fi
