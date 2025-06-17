public class DeveloperClient {
    public static void main(String[]args){
       Employee empp =  EmployeeFactory.getEmployee("ANDROID DEVELOPER");
       System.out.println(empp.salary());
    }
    
}
