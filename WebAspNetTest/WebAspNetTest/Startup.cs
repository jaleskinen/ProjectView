using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebAspNetTest.Startup))]
namespace WebAspNetTest
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
