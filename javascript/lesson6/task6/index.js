function increaser(a, index) {
  if (a > index) {
    return (a += index);
  } else {
    return a;
  }
}
increaser(5, 10);
