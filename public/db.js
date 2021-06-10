//local indexedDB for budget tracker

//create the budget database
let db;
const request = indexedDB.open("budget", 1);

//create the onupgrade event with object store pending
request.onupgradeneeded = function(event) {
    const db = event.target.result;
    db.createObjectStore("pending", { autoIncrement: true });
};

//create success event
request.onsuccess = function(event) {
    db = event.target.result;
  
    // checks if site is online before reading database
    if (navigator.onLine) {
      readDB();
    }
};

//create error event 
request.onerror = function(event) {
    console.log(event.target.errorCode);
};

//create method to save record to pending store
function saveRecord(record) {
    const tx = db.transaction(["pending"], "readwrite");
    const store = tx.objectStore("pending");
    store.add(record);
};
