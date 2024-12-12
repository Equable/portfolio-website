interface ClassNamesArgs {
  [key: string]: boolean;
}

export const classNames = (classNamesArgs: ClassNamesArgs) => {
  const classNameString: string[] = [];
  for (const key in classNamesArgs) {
    if (classNamesArgs[key]) {
      classNameString.push(key);
    }
  }
  return classNameString.join(" ");
};
