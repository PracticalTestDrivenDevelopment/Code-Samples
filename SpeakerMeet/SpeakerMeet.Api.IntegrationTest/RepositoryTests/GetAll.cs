using Microsoft.EntityFrameworkCore;
using SpeakerMeet.Models;
using SpeakerMeet.Repositories;
using Xunit;
using Speaker = SpeakerMeet.DTO.Speaker;

namespace SpeakerMeet.Api.IntegrationTest.RepositoryTests
{
    public class GetAll
    {
        [Fact]
        public void ItExists()
        {
            var options = new DbContextOptions<SpeakerMeetContext>()
                .UseInMemoryDatabase("SpeakerMeetInMemory")
                .Options;
                

            var context = new SpeakerMeetContext(options);

            var repository = new Repository<Speaker>(context);
        }
    }
}
