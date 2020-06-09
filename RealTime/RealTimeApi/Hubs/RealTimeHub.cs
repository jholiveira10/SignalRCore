using Microsoft.AspNetCore.SignalR;
using RealTimeApi.Models;
using System.Threading.Tasks;

namespace RealTimeApi.Hubs
{
    public class RealTimeHub : Hub
    {

        public async Task CadastrarPromocao(Promocao promocao)
        {

            await Clients.Caller.SendAsync("CadastradoSucesso");


            await Clients.All.SendAsync("ReceberPromocao", promocao);
        }


    }
}
