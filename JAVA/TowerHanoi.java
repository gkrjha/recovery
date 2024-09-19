class TowerHanoi{
  public static void towerOfHanoi(int n, char source, char auxiliary, char destination){
    if(n<0){
      return;
    }
    towerOfHanoi(n-1, source, auxiliary, destination);
    System.out.println("Move disk " + n + " from " + source + " to " + destination);
    towerOfHanoi(n-1, auxiliary, destination, source);

  }
  public static void main(String[] args) {
    int n = 2;
    System.out.println("Solution for Tower of Hanoi problem with " + n + " disks:");
    towerOfHanoi(n, 'A', 'B', 'C');
  }
}