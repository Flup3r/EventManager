using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class Login
    {
        [Required, EmailAddress]
        public string Email { get; set; }

        [DataType(DataType.Password)]
        public string Password { get; set; }

        public string ReturnUrl { get; set; }


        public Login() { }

        public Login(AppUser appUser)
        {
            Email = appUser.Email;
            Password = appUser.PasswordHash;
    }
}