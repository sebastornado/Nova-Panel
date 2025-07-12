
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MoreHorizontal,
  PlusCircle,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/context/language-context";


const initialUsers = [
  { name: 'Olivia Martin', email: 'olivia.martin@email.com', role: 'Admin', status: 'Active', avatar: 'https://placehold.co/100x100/A8D8B9/424242.png?text=OM', hint: 'woman portrait' },
  { name: 'Jackson Lee', email: 'jackson.lee@email.com', role: 'User', status: 'Active', avatar: 'https://placehold.co/100x100/E6B3A3/424242.png?text=JL', hint: 'man portrait' },
  { name: 'Isabella Nguyen', email: 'isabella.nguyen@email.com', role: 'User', status: 'Inactive', avatar: 'https://placehold.co/100x100/F0E68C/424242.png?text=IN', hint: 'woman smiling' },
  { name: 'William Kim', email: 'will@email.com', role: 'User', status: 'Active', avatar: 'https://placehold.co/100x100/B3E0F2/424242.png?text=WK', hint: 'man glasses' },
  { name: 'Sofia Davis', email: 'sofia.davis@email.com', role: 'User', status: 'Active', avatar: 'https://placehold.co/100x100/D4B4E4/424242.png?text=SD', hint: 'woman professional' },
]

type User = {
  name: string;
  email: string;
  role: 'Admin' | 'User';
  status: 'Active' | 'Inactive';
  avatar: string;
  hint: string;
};

export default function UsersPage() {
  const { t } = useLanguage();
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [newUser, setNewUser] = useState<Omit<User, 'avatar' | 'hint'>>({ name: '', email: '', role: 'User', status: 'Active' });

  const handleEditClick = (user: User) => {
    setCurrentUser({ ...user });
    setIsEditDialogOpen(true);
  };

  const handleDeleteClick = (email: string) => {
    setUsers(users.filter(user => user.email !== email));
  };

  const handleSaveUser = () => {
    if (currentUser) {
      setUsers(users.map(user => user.email === currentUser.email ? currentUser : user));
      setIsEditDialogOpen(false);
      setCurrentUser(null);
    }
  };

  const handleAddUser = () => {
    const userToAdd: User = { ...newUser, avatar: 'https://placehold.co/100x100.png', hint: 'user avatar' };
    setUsers([...users, userToAdd]);
    setNewUser({ name: '', email: '', role: 'User', status: 'Active' });
    setIsAddDialogOpen(false);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl font-headline">{t('users.title')}</h1>
        <div className="ml-auto flex items-center gap-2">
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button size="sm" className="h-8 gap-1">
                    <PlusCircle className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        {t('users.addUser')}
                    </span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{t('users.addUserDialogTitle')}</DialogTitle>
                  <DialogDescription>
                    {t('users.addUserDialogDescription')}
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">{t('users.nameLabel')}</Label>
                    <Input id="name" value={newUser.name} onChange={(e) => setNewUser({...newUser, name: e.target.value})} className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">{t('users.emailLabel')}</Label>
                    <Input id="email" type="email" value={newUser.email} onChange={(e) => setNewUser({...newUser, email: e.target.value})} className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="role" className="text-right">{t('users.roleLabel')}</Label>
                    <Select value={newUser.role} onValueChange={(value: 'Admin' | 'User') => setNewUser({...newUser, role: value})}>
                        <SelectTrigger className="col-span-3">
                            <SelectValue placeholder={t('users.selectRolePlaceholder')} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Admin">{t('users.adminRole')}</SelectItem>
                            <SelectItem value="User">{t('users.userRole')}</SelectItem>
                        </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                      <Button variant="outline">{t('users.cancel')}</Button>
                  </DialogClose>
                  <Button onClick={handleAddUser}>{t('users.addUser')}</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>{t('users.userManagement')}</CardTitle>
          <CardDescription>
            {t('users.manageUsersDescription')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t('users.userColumn')}</TableHead>
                <TableHead>{t('users.roleColumn')}</TableHead>
                <TableHead className="hidden md:table-cell">{t('users.statusColumn')}</TableHead>
                <TableHead>
                  <span className="sr-only">{t('users.actionsColumn')}</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map(user => (
                <TableRow key={user.email}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src={user.avatar} alt={user.name} data-ai-hint={user.hint} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <Link href={`/users/${encodeURIComponent(user.email)}`} className="hover:underline">
                            {user.name}
                        </Link>
                        <div className="text-sm text-muted-foreground">{user.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{t(`users.${user.role.toLowerCase()}Role`)}</Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Badge variant={user.status === 'Active' ? 'positive' : 'secondary'}>{t(`users.${user.status.toLowerCase()}Status`)}</Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>{t('users.actionsColumn')}</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => handleEditClick(user)}>{t('users.edit')}</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDeleteClick(user.email)}>{t('users.delete')}</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div className="text-xs text-muted-foreground">
            {t('users.showing')} <strong>1-{users.length > 5 ? 5 : users.length}</strong> {t('users.of')} <strong>{users.length}</strong> {t('users.users')}
          </div>
        </CardFooter>
      </Card>

      {currentUser && (
         <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{t('users.editUserDialogTitle')}</DialogTitle>
                    <DialogDescription>
                        {t('users.editUserDialogDescription')} {currentUser.name}.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="edit-name" className="text-right">{t('users.nameLabel')}</Label>
                        <Input id="edit-name" value={currentUser.name} onChange={(e) => setCurrentUser({...currentUser, name: e.target.value})} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="edit-email" className="text-right">{t('users.emailLabel')}</Label>
                        <Input id="edit-email" type="email" value={currentUser.email} readOnly className="col-span-3 bg-muted" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="edit-role" className="text-right">{t('users.roleLabel')}</Label>
                        <Select value={currentUser.role} onValueChange={(value: 'Admin' | 'User') => setCurrentUser({...currentUser, role: value})}>
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder={t('users.selectRolePlaceholder')} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Admin">{t('users.adminRole')}</SelectItem>
                                <SelectItem value="User">{t('users.userRole')}</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                     <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="edit-status" className="text-right">{t('users.statusLabel')}</Label>
                        <Select value={currentUser.status} onValueChange={(value: 'Active' | 'Inactive') => setCurrentUser({...currentUser, status: value})}>
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder={t('users.selectStatusPlaceholder')} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Active">{t('users.activeStatus')}</SelectItem>
                                <SelectItem value="Inactive">{t('users.inactiveStatus')}</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <DialogFooter>
                     <DialogClose asChild>
                        <Button variant="outline">{t('users.cancel')}</Button>
                    </DialogClose>
                    <Button onClick={handleSaveUser}>{t('users.saveChanges')}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
