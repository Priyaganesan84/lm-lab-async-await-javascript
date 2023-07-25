const promise = new Promise((resolve, reject) => {
	// Generate random number between 0 and 9
	const randomInt = Math.floor(Math.random() * 10);

	if (randomInt % 2 === 0) {
		// Success
		setTimeout(() => resolve('done'), 2000);
	} else {
		// Failure
		setTimeout(() => reject('error'), 2000);
	}
});

// Your solution(s) to exercise001 here!
// use then and catch
// promise.then(
// 	(result) => {
// 	  console.log(`Yay! Promise resolved with response: `, result);
// 	},
// 	(error) => {
// 	  console.error(`Boo. Promise rejected with response: `, error);
// 	}
//   );


  // use asyn/await
  async function handlePromise(){
	try {
		const result = await promise;
		console.log(`Yay! Promise resolved with response: `,result); //success try block executed
	
	} catch (error) {
		console.error(`Boo. Promise rejected with response: `, error); // failed catch block executed.
	
		
	}
  }
  handlePromise();