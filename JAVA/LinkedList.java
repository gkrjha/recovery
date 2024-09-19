class Node{
  int data;
  Node next;
  
  Node(int data){
    this.data = data;
    this.next = null;
  }
}

public class LinkedList{
  Node head=null;
  
  void addNode(int data){
  Node newNode = new Node(data);
  if(head==null){
    head=newNode;
  }else{
    Node last=head;
    while(last.next != null){
      last=last.next;
    }
    last.next = newNode;
  }
  }

  void addFirst(int data){
    Node newNode =new Node(data);
    newNode.next =head;
    head=newNode;
  }
  void addMiddle(int data){
    Node newNode = new Node(data);
    if(head==null || head.next==null){
      head=newNode;
    } else {
      Node slow = head;
      Node fast = head.next;
      while(fast!=null && fast.next!=null){
        slow = slow.next;
        fast = fast.next.next;
      }
      newNode.next = slow.next;
      slow.next = newNode;
    }
  }
  
  void deleteNode(int data){
    
  }
  void printList(){
    Node currentNode = head;
    while(currentNode!=null){
      System.out.print(currentNode.data + " ");
      currentNode = currentNode.next;
    }
    System.out.println();
  }
  
}