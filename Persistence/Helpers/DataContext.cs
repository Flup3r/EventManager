using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
using Domain.Entities;

namespace Persistence.Helpers
{
    public class DataContext : DbContext
    {
        protected readonly IConfiguration Configuration;

        public DataContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            // connect to future sql server database
            
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Event> Events { get; set; }
    }
}