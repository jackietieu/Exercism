export default () => {
  let roster = {},
      add = (student, grade) => {
        roster[grade] ? roster[grade].push(student) : roster[grade] = [student];
        roster[grade].sort();
      },
      deepCopy = (db) => JSON.parse(JSON.stringify(db));

    return {
      roster: () => deepCopy(roster),
      add: (student, grade) => add(student,grade),
      grade: (searchVal) => deepCopy(roster[searchVal] || [])
    };
}
