//22. The following is an array of 10 students ages:
   // => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
   // - Sort the array and find the min and max age
    //- Find the median age(one middle item or two middle items divided by two)
   // - Find the average age(all items divided by number of items) 
    //- Find the range of the ages(max minus min)
    //- Compare the value of (min - average) and (max - average), use abs() method

    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25,24];

    const sort = ages.sort();
    console.log(sort);

    const min = Math.min(...ages)
    console.log(min);

    const max = Math.max(...ages)
    console.log(max);

    console.log(sort.length);

    const median = () =>{
      if(sort.length% 2 == 0){
        console.log("Median is " + (sort[sort.length/2] + sort[sort.length/2 + 1])/2);
      }
      else{console.log(`Median is ${sort[sort.length/2 + 0.5]}`);}
    }

    median();

    let sum = 0;
    for(let i=0; i<ages.length; i++){
      sum = sum + ages[i];
    }
    console.log(sum);

    const range = max - min;
    console.log(range);


    let average = sum/ages.length;
    console.log(average);

    console.log(Math.abs(min-average));
    console.log(Math.abs(max-average));




