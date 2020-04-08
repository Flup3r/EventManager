using System.ComponentModel.DataAnnotations;

namespace Domain.Users
{
    public class AuthenticateModel
    {
        [Required]
        public string EmailUsername { get; set; }
        [Required]
        public string Password { get; set; }
    }
}