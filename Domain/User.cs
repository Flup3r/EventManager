using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class User
    {
        [Required]
        public string UserName {get; set;}

        [Required, EmailAddress]
        public string Email {get; set;}

        [DataType(DataType.Password), Required]
        public string Password {get; set;}

        [DataType(DataType.Password)]
        [Compare("Password")]
        public string ConfirmPassword {get; set;}
    }
}