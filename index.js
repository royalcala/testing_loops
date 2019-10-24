function testArrays(n) {
    var data = []
    var oData = {}
    const mockData = (number) => {
       
        for (let i = 0; i < number; i++) {
            data.push(i)
            oData[i] = data[i]
        }
        return data
    }


    console.time('mockDataArray');
    var posts = mockData(n)
    console.timeEnd('mockDataArray');
    let sum = 0;

    sum = 0;
    console.time('link_oData');
    sum = posts.reduce((acc, v) =>{
        oData[v]
    }, 0);
    console.timeEnd('link_oData')
    //win <-----------
    console.time('for loop');
    for (let i = 0; i < posts.length; i++) {
        // sum += posts[i];
    }
    console.timeEnd('for loop');

    sum = 0;
    console.time('reduce');
    sum = posts.reduce((s, p) =>{

    }, 0);
    console.timeEnd('reduce')

    //second <--------
    sum = 0;
    console.time('R.reduce');
    var init = []
    sum = R.reduce(
        (acc, v) => {
            // return [
            //     ...acc,
            //     v
            // ]
        }
        , []
    )(posts)
    console.timeEnd('R.reduce');

    // sum = 0;
    // console.time('R.map');
    // R.map(
    //     (n) => sum += n
    // )(posts)
    // console.timeEnd('R.map');

    sum = 0;
    console.time('map');
    posts.map((s) => {

    });
    console.timeEnd('map')

    // sum = 0;
    // console.time('for each');
    // posts.forEach(element => {
    //     sum += element;
    // });
    // console.timeEnd('for each');

}
let n = 10000000
testArrays(n)

function testObject() {
    const mockData = (number) => {
        let data = {}
        for (let i = 0; i < number; i++) {
            data[i] = i
        }
        return data
    }
    console.time('mockDataObject');
    var posts = mockData(n)
    console.timeEnd('mockDataObject');

    var sum = 0;
    // console.time('toPairs_R.reduce');
    // sum = R.pipe(
    //     R.toPairs,
    //     R.reduce(
    //         (acc, v) => (acc + v)
    //         , 0
    //     )
    // )(posts)
    // console.timeEnd('toPairs_R.reduce');

    sum = 0;
    console.time('R.forEachObjIndexed');
    // const printKeyConcatValue = (value, key) => console.log(key + ':' + value);
    R.forEachObjIndexed((value, key) => sum += value, posts);
    console.timeEnd('R.forEachObjIndexed');


    sum = 0;
    console.time('R.mapObjIndexed');
    // const xyz = { x: 1, y: 2, z: 3 };
    // const prependKeyAndDouble = (num, key, obj) => key + (num * 2);

    //win<---------
    R.mapObjIndexed((num, key, obj) => sum += num, posts)
    console.timeEnd('R.mapObjIndexed');

    console.time('Object.entries(myObj).forEach');
    Object.entries(posts).forEach(([key, val]) => {
        // console.log(key); // the name of the current key.
        // console.log(val); // the value of the current key.
    });
    console.timeEnd('Object.entries(myObj).forEach');
    console.time(' for (key in posts)')
    let key
    for (key in posts) {
        // alert(key + ' => ' + p[key]);
    }
    console.timeEnd(' for (key in posts)')
}
