using API.Entities;

namespace API.intefaces
{
    public interface ITokenService
    {
       string CreateToken(AppUser user);
    
    }
}
