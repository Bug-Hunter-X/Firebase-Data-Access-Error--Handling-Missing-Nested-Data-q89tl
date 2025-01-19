The following code addresses the issue by implementing optional chaining and nullish coalescing:

```javascript
const db = firebase.firestore();

db.collection('users').doc('user1').get().then(doc => {
  if (doc.exists) {
    const nestedData = doc.data().profile?.address?.street ?? 'N/A';
    console.log(nestedData); // This will now gracefully handle missing data
  }
});
```

By using optional chaining (`?.`), the code safely accesses the nested fields without throwing an error if any intermediate field is missing. The nullish coalescing operator (`??`) provides a default value ('N/A' in this case) if the nested field is null or undefined.