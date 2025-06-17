public class Samosa {

   private static Samosa samosa; 

    //Constructor called when we create an object
    private  Samosa(){

    }
    public  static Samosa getSamosa()
    {
        //object of this class will be created


        if(samosa==null){
           synchronized(Samosa.class){
           if(samosa==null){
  samosa=new Samosa();
           }
           }

        }
        return samosa;
    }
}

/*
 * 1. Constructor should be private
 * 
 * 2. Object creation with the help of method(factory method)
 * 
 * 3. Create field to store object is private
 */