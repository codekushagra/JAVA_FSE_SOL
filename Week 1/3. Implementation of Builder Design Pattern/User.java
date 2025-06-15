public class User {
    private String userId;
    private String userName;
    private String emailId;
    

    private User(UserBuilder builder){
        //initialize
        this.userId = builder.userId;
        this.userName = builder.userName;
        this.emailId = builder.emailId;

    }
    public String getUserId(){
        return userId;
    }
    public String getUserName(){
        return userName;
    }
    public String getEmailId(){
        return emailId;

    }

    @Override
    public String toString(){
        return this.userName + " : " + this.emailId + " : " + this.userId;
    }

    //inner class to create object
    static class UserBuilder{
        private String userId;
    private String userName;
    private String emailId;

    public UserBuilder(){

    }

    public UserBuilder setUserId(String userId) {
        this.userId = userId;
        return this;
    }
    public UserBuilder setUserName(String userName) {
        this.userName = userName;
        return this;
    }
    public UserBuilder setEmailId(String emailId) {
        this.emailId = emailId;
        return this;
    }

    public User build(){
        User user = new User(this);
        return user;
    }

    
    

    }
    
}
