using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class ForgotPassword
    {
        [Required]
        [EmailAddress]
        public string Email {get; set;}
        
    }
}