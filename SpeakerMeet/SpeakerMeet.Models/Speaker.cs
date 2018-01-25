using SpeakerMeet.Repositories.Interfaces;

namespace SpeakerMeet.Models
{
    public class Speaker : IIdentity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }
        public bool IsDeleted { get; set; }
    }
}