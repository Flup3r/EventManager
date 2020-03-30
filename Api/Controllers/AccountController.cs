using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Domain;
using Persistence;



namespace Api.Controllers
{
    //[Authorize] 
    public class AccountController : Controller
    {
        private readonly UserManager<AppUser> userManager;
        private readonly SignInManager<AppUser> signInManager;
        private IPasswordHasher<AppUser> passwordHasher;       
        private readonly ILogger<AccountController> logger;
        private readonly DataContext context;
        public AccountController(UserManager<AppUser> userManager,
                                SignInManager<AppUser> signInManager,
                                IPasswordHasher<AppUser> passwordHasher,                                
                                ILogger<AccountController> logger,
                                DataContext context)
            {
                this.userManager = userManager;
                this.signInManager = signInManager;
                this.passwordHasher = passwordHasher;            
                this.logger = logger;
                this.context = context;            
            }
        
}