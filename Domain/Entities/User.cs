using System;

namespace Domain.Entities
{
    public class User
    {
        public Guid Id { get; set; }
        public string Email {get;set;}
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
    }
}