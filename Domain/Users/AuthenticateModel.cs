using System.ComponentModel.DataAnnotations;

namespace Domain.Users
{
    public class AuthenticateModel
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}