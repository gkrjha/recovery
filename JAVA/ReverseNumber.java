public class ReverseNumber {
  public static void main(String[] args) {
    int num = 121;
    int rev = 0;
    while(num !=0){
      int rem=num%10;
      rev=rem+rev*10;
      num /=10;
    }
    System.out.println("Reversed Number: "+rev);
  }
}
