using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class ResetPassword
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password {get; set;}

        [DataType(DataType.Password)]    
        [Compare("Password")]
        public string ConfirmPassword {get; set;}
        

        public string Token { get; set; }
    }
}