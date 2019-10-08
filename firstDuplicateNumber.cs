int firstDuplicateNumber(int[] array) {
  for(int i = 0; i < array.length; i++)
  {
    for(int j = 0; j < i; j++)
    {
      if(array[i] == array[j])
      {
        return array[i];
      }
    }
      return -1;
  }
}
