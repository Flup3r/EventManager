using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
            
        }
        
        public DbSet<Event> Events { get; set; }

        protected override void  OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Event>()
                .HasData(
                    new Event {Id = Guid.NewGuid(), Category = "wedding", Title = "Test 1", Description = "Descr", Place = "Warsaw" },
                    new Event {Id = Guid.NewGuid(), Category = "wedding", Title = "Test 2", Description = "Descr2", Place = "Poznan" },
                    new Event {Id = Guid.NewGuid(), Category = "wedding", Title = "Test 3", Description = "Descr3", Place = "Lublin" }
                );
            
                    }
    }
}