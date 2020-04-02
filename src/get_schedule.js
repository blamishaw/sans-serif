// Day constants for matrix accessing
const MONDAY = 0;
const TUESDAY = 1;
const WEDNESDAY = 2;
const THURSDAY = 3;
const FRIDAY = 4;

// Time constants for matrix using 24hr time
const EIGHT = 0;
const EIGHT_THIRTY = 1;
const NINE = 2;
const NINE_THIRTY = 3;
const TEN = 4;
const TEN_THIRTY = 5;
const ELEVEN = 6;
const ELEVEN_THIRTY = 7;
const TWELVE = 8;
const TWELVE_THIRTY = 9;
const THIRTEEN = 10;
const THIRTEEN_THIRTY = 11;
const FOURTEEN = 12;
const FOURTEEN_THIRTY = 13;
const FIFTEEN = 14;
const FIFTEEN_THIRTY = 15;
const SIXTEEN = 16;
const SIXTEEN_THIRTY = 17;
const SEVENTEEN = 18;
const SEVENTEEN_THIRTY = 19;
const EIGHTEEN = 20;
const EIGHTEEN_THIRTY = 21;
const NINETEEN = 22;
const NINETEEN_THIRTY = 23;
const TWENTY = 24;
const TWENTY_THIRTY = 25;
const TWENTYONE = 26;


let time_matrix = []

const init_matrix = () => {
  for (let i = 0; i < 27; i++){
    time_matrix.push([0, 0, 0, 0, 0]);
  }
}

const alloc_time = (time, day) => {
  time_matrix[time][day] = 1;
}

const free_time = (time, day) => {
  time_matrix[time][day] = 0;
}

const is_alloc = (time, day) => {
  return time_matrix[time][day] == 1;
}

const log = (courses) => {
    console.log(courses);
}
