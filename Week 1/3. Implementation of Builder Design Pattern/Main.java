public class Main {
    public static void main(String[] args) {
        User user = new User.UserBuilder()
        .setEmailId("kushagra@gmail.com")
        .setUserId("123")
        .setUserName("Kushagra")
        .build();

        System.out.println(user);

    }
    
}
