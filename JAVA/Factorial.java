
public class Factorial {
  public static int factorial(int num){
    if(num<=0){
      return 1;
    }
    return num*factorial(num-1);
  }
  public static void main(String[] args) {
    int factorial = factorial(5);
    System.out.println("Factorial of 5: " + factorial);
  }
}