public class CharCount {
  public static int getCharCount(String str,char c,int counter){
    if(counter == str.length()){
      return 0;
    }
    
    return (str.charAt(counter)==c?1:0)+getCharCount(str, c, counter+1);
  }
  
  public static void main(String[] args) {
    String str = "Hello World!";
    char c = 'l';
    int counter = 0;
    int count = getCharCount(str, c, counter);
    System.out.println(count);
  }
}
