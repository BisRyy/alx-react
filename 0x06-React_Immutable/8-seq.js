import { Seq, Map } from 'immutable';

export default function printBestStudents(inputObject) {
  const newMap = Map(inputObject);
  const lazySeq = Seq(newMap);
  const gradesObject = lazySeq.filter((value) => value.score > 70).map((value) => (
    const fn = value.firstName;
    const ln = value.lastName;

    value.firstName = fn.charAt(0).toUpperCase() + fn.slice(1);
    value.lastName = ln.charAt(0).toUpperCase() + ln.slice(1);
    return null;
  ));
  console.log(gradesObject);
}
