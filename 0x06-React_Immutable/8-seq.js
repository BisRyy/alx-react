import { Seq, Map } from 'immutable';

export default function printBestStudents(inputObject) {
  const newMap = Map(inputObject);
  const lazySeq = Seq(newMap);
  const gradesObject = lazySeq.filter((value) => value.score < 70).map((value) => (
    value.firstName.charAt(0).toUpperCase()
    value.lastName.charAt(0).toUpperCase()
  ));
  console.log(gradesObject);
}
