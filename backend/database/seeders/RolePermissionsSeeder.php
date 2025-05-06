<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $permissionGroups = [
            'Data-management' => [
                'base-data-management',
                'product-management',
                'employee-management',
                'machine-management',
                'plant-management',
            ],
            'Work-order' => [
                'work-order-management',
                'client-management',
                'supplier-management',
            ],
            'User-management' => [
                'user-management',
                'role-permission',
                'activity-log',
                'administration-power',
            ],
            'Operations' => [
                'storage-management',
                'operation-management',
                'tools-management',
                'capacity-management',
            ],
            'Facility-management' => [
                'hall-management',
                'machine-group',
                'machine-state',
            ],
            'Client' => [
                'client-note',
                'client-areas',
            ],
            'Asset' => [
                'asset-management',
            ]
        ];
        
        foreach ($permissionGroups as $group => $permissions) {
            foreach ($permissions as $permission) {
                Permission::updateOrCreate([
                    'name' => $permission,
                    'guard_name' => 'web',
                    'group' => $group,
                ]);
            }
        }
        
    }
}